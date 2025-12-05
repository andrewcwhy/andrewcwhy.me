import { createFileRoute } from "@tanstack/solid-router";
import { allPosts } from "content-collections";
import { For } from "solid-js";

function AppComponent() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        <For each={allPosts}>
          {(post) => (
            <li>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div innerHTML={post.html} />
            </li>
          )}
        </For>
      </ul>
    </>
  );
}

export const Route = createFileRoute("/md")({
  component: AppComponent,
  head: () => ({
    meta: [
      {
        title: "About Me - andrewcwhy",
      },
      {
        name: "description",
        content: "",
      },
    ],
  }),
});
