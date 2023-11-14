<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PostsParams } from "@/utils/types/types";
import { getPostsUser } from "../utils/api/index";

const getPosts = ref<PostsParams[] | null>(null);

const getPostsUsers = async () => {
  try {
    const response = await getPostsUser();
    getPosts.value = response.data;
    console.log(getPosts.value);
    return getPosts.value;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
    getPostsUsers()
})
</script>

<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">user id</th>
          <th scope="col" class="px-6 py-3">id</th>
          <th scope="col" class="px-6 py-3">title</th>
          <th scope="col" class="px-6 py-3">body</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(item, index) in getPosts"
          :key="index"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ index + 1 }}
          </th>
          <td class="px-6 py-4">{{ item.userId }}</td>
          <td class="px-6 py-4">{{ item.id }}</td>
          <td class="px-6 py-4">{{ item.title }}</td>
          <td class="px-6 py-4">{{ item.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
