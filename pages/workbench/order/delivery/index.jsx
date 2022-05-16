import WorkbenchLayout from "../../../../layout/WorkbenchLayout";

export default function Delivery() {
  return <div>index</div>;
}

Delivery.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
