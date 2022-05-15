import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function Type() {
  return <div>type</div>;
}

Type.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
