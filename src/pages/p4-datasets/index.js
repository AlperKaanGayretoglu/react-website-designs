import DataTable from "./common/components/DataTable";
import DatabaseIcon from "./common/icons/DatabaseIcon";
import DefaultProfileIcon from "./common/icons/DefaultProfileIcon";
import MagnifyingGlassIcon from "./common/icons/MagnifyingGlassIcon";
import UploadIcon from "./common/icons/UploadIcon";
import style from "./style.module.css";

function Datasets() {
  return (
    <div className={style["datasets"]}>
      <header className={style["datasets-header"]}>
        <div className={style["datasets-header-left"]}>
          <span>GBEACON</span>
          <div>
            <MagnifyingGlassIcon />
            Query
          </div>
          <div>
            <DatabaseIcon />
            Datasets
          </div>
        </div>
        <div className={style["datasets-header-right"]}>
          <DefaultProfileIcon />
          <span>A. Semsettin</span>
        </div>
      </header>

      <div className={style["datasets-content"]}>
        <div className={style["datasets-content-title"]}>
          <span>Datasets</span>
          <button className={style["datasets-upload-button"]}>
            <UploadIcon />
            <span>Upload</span>
          </button>
        </div>
        <p>
          You can list datasets and upload a new one, lorem ipsum test. You can
          make a query here, lorem ipsum test. You can make a query here, lorem
          ipsum test. You can make a query here, lorem ipsum test. lorem ipsum
          test. lorem ipsum test. You can make a query here, lorem ipsum test.
          You can make a query here, lorem ipsum test. You can make a query
          here, lorem ipsum test. You can make a query here, lorem ipsum test.
          lorem ipsum.
        </p>

        <DataTable />
      </div>
    </div>
  );
}

export default Datasets;
