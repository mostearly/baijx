import * as React from 'react'
import classes from './index.styl'

const now = new Date()

export default () => <footer className={classes.footer}>
  <div className={classes.footer__inner}>
    <p>🍀 努力成为想成为的那个人</p>
    <p className={classes.copyright}>
      <i>©</i>
      <span>{now.getFullYear()}</span>
      <span>natural spirit</span>
    </p>
    <p className={classes.powered__by}>
      <span>Powered By <a href='https://gatsbyjs.org' title="前往Gatsby官方网站">Gatsby</a></span>
      <span>Theme By <a href='https://mostearly.com' title="前往mostearly.com">mostearly.com</a></span>
    </p>
    <p className={classes.site__data}>
      <span><a href="/rss.xml" target="_blank" title="查看RSS">RSS</a></span>
      <span><a href="/sitemap.xml" target="_blank" title="查看站点地图">SiteMap</a></span>
      <span><a href="//github.com/mostearly" target="_blank" rel="noopener" title="前往Github">Github</a></span>
      <span><a href="//analytics.google.com" target="_blank" rel="noopener" title="查看站点分析">Google Analytics</a></span>
    </p>
  </div>
</footer>
