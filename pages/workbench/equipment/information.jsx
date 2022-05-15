import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function Information() {
  return <div>Information</div>;
}

Information.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
