/*
 * @Author: liuyuhao
 * @Date: 2023-01-29 10:40:10
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 14:33:29
 * @Description:
 */
import styles from './index.module.less'

function Home() {
  return (
    <div
      className={styles.content}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%,-50%,0)',
      }}>
        <div className={styles.text}>test</div>
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: '15em',
          fontWeight: 500,
          letterSpacing: '-0.05em',
        }}>
        hello
      </h1>
    </div>
  )
}
export default Home
