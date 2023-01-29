/*
 * @Author: liuyuhao
 * @Date: 2023-01-29 10:40:10
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 16:04:28
 * @Description:
 */
import styles from './index.module.css'
import Starry from './Starry'
function Home() {
  return (
    <div className={styles.root}>
      <Starry />
      <h1 className={styles.text}>hello</h1>
    </div>
  )
}
export default Home
