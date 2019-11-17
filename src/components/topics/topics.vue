<template>
    <main class="main">
        <section class="main__section flex_end">
            <button class="button">Создать тему</button>
        </section>
        <section class="main__section">
            <ul class="topics-list">
                <li v-for="(topic, i) in topics" :key="i">
                    {{topic.name}}
                </li>
            </ul>
        </section>
    </main>
</template>

<script src="./topics.ts" lang="ts"></script>
<style src="./topics.scss"></style>