import { TailSpin } from "react-loader-spinner";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <TailSpin
        visible={true}
        top="200px"
        height="150"
        width="150"
        color="#921A40"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
