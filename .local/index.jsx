import Link from "next/link";
import TestLayout from "../../layout/TestLayout";
export default function Workbench() {
  return (
    <>
      workbench页面
      <Link href="/workbench/home">
        <a>go home</a>
      </Link>
    </>
  );
}

Workbench.getLayout = function getLayout(page) {
  return <TestLayout>{page}</TestLayout>;
};
