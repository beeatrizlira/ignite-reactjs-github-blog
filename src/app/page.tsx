import { PostCard } from "@/components/PostCard";
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

const posts = [
  {
    id: 1,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 2,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 3,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 4,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 5,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 6,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
];

export default function Home() {
  return (
    <main>
      <ProfileResume data={data} />
      <SearchForm />
      <article>
        {posts.map((post) => (
          <PostCard data={post} />
        ))}
      </article>
    </main>
  );
}
