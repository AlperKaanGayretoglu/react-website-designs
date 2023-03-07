import DataTableRow from "./DataTableRow";

import style from "./style.module.css";

function DataTable() {
  return (
    <div className={style["datasets-table"]}>
      <DataTableRow
        isHead={true}
        id="ID"
        name="Name"
        assemblyId="Assembly ID"
        variantColor="Variant Count"
        sampleCount="Sample Count"
        version="Version"
        createDate="Create Date"
      />
      <DataTableRow
        id="123"
        name="Dataset 1"
        assemblyId="GRCh38"
        variantColor="123"
        sampleCount="21"
        version="v0.1"
        createDate="13/07/2021"
      />
      <DataTableRow
        id="921"
        name="Best Dataset"
        assemblyId="GRCh38"
        variantColor="123"
        sampleCount="21"
        version="v0.1"
        createDate="19/07/2021"
      />
    </div>
  );
}

export default DataTable;
