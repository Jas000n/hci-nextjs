import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function YaoHome() {
  return <div>yao</div>;
}

YaoHome.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
