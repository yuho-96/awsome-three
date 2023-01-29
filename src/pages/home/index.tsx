/*
 * @Author: liuyuhao
 * @Date: 2023-01-29 10:40:10
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 11:48:54
 * @Description:
 */
import styles from './home.module.less'

function Home() {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%,-50%,0)',
        }}>
        <h1
          className={styles.text}
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
    </div>
  )
}
export default Home
