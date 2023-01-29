/*
 * @Author: liuyuhao
 * @Date: 2023-01-29 10:40:10
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 15:00:22
 * @Description:
 */
import styles from './index.module.css'

function Home() {
  return (
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
        }}>
        hello
      </h1>
    </div>
  )
}
export default Home
