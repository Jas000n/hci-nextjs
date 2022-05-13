import { useRouter } from "next/router";

export default function Tab() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Post Slug: {slug}</div>;
}
