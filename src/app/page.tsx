import { ProfileResume } from "@/components/ProfileResume";
import { SearchForm } from "@/components/SearchForm";

const data = {
  name: "Beatriz",
  description:
    "Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.",
  user: "beatriizx",
  company: "Skeelo",
  followersCount: 32,
  imgHref: "../../assets/logo.svg",
  profileUrl:
    "https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1",
};

export default function Home() {
  return (
    <main>
      <ProfileResume data={data} />
      <SearchForm />
    </main>
  );
}
