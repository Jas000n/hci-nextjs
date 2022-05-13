import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function Home() {
  return <div>home</div>;
}
Home.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
