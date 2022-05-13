import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function Order() {
  return <div>order</div>;
}

Order.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
