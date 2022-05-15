import styled from "styled-components";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";
export default function Home() {
  return (
    <div className="graphBar">
      <div>
        <div>图表</div>
        <div>名称</div>
      </div>
      <div>
        <div>图表</div>
        <div>名称</div>
      </div>
      <div>
        <div>图表</div>
        <div>名称</div>
      </div>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
