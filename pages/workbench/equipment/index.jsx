import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function Equipment() {
  return <div>equipment</div>;
}

Equipment.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
