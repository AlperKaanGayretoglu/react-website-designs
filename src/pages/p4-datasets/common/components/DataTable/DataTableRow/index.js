import style from "./style.module.css";

function DataTableRow({
  isHead,
  id,
  name,
  assemblyId,
  variantColor,
  sampleCount,
  version,
  createDate,
}) {
  return (
    <div
      className={isHead ? style["data-table-head"] : style["data-table-row"]}
    >
      <div className={style["different"]} style={{width: (16+75)+"px"}}>{id}</div>
      <div className={style["different"]} style={{width: (43+118)+"px"}}>{name}</div>
      <div style={{width: (91+124)+"px"}}>{assemblyId}</div>
      <div style={{width: (99+94)+"px"}}>{variantColor}</div>
      <div style={{width: (102+133)+"px"}}>{sampleCount}</div>
      <div className={style["different"]} style={{width: (56+81)+"px"}}>{version}</div>
      <div className={style["different"]} style={{width: (85+(141-32))+"px"}}>{createDate}</div>
    </div>
  );
}

DataTableRow.defaultProps = {
  isHead: false,
};

export default DataTableRow;
