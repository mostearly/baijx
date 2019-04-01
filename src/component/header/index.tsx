import { Link } from 'gatsby'
import React from 'react'
import classes from './index.styl'
import { Desktop, Mobile, MobileLoader } from '@/component/media_query'

import {
  InjectLayoutContext,
  InjectProps
} from '@/component/inject_layout_context'

// 从InjectLayoutContext接收一部分数据
type DispatchProps = {
  title: InjectProps['title']
  menu: InjectProps['menu']
}

function Header(props: DispatchProps) {
  const path = typeof location === 'object' ? location.pathname.split('/')[1] : null
  const {menu, title} = props
  return (
      <>
        {/*<img className={classes.site__logo} src={logo} alt="site logo"/>*/}
        <Desktop>
          <header className={classes.header}>
            <Link to="/writing"><h1 className={classes.site__title}>{title}</h1></Link>
            <nav className={classes.menu}>
              <ul className={classes.menu__list}>
                {menu.map((v, i) => (
                  <li
                    className={`${classes.menu__item} ${
                      path && v.path.includes(path)
                        ? classes.menu__item__active
                        : ''
                      }`.trimRight()}
                    key={i}
                  >
                    <Link to={v.path} children={v.name} />
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </Desktop>
        <Mobile>
          <header className={classes.header__mobile}>
            <div className={classes.headband} />
            <MobileLoader path={'header/sidebar'}/>
          </header>
        </Mobile>
      </>
  )
}

export default InjectLayoutContext<DispatchProps>(Header, ({ title, menu }) => ({
  title, menu
}))
