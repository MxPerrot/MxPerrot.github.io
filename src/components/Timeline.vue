
<script>
import { ref, computed } from 'vue';
import { t } from '../i18n';

export default {
    setup() {
        const events = ref([
            {
                icon:"../assets/mortarboard-fill.svg",
                date: computed(() => t('event1_date')),
                title: computed(() => t('event1_title')),
                place: computed(() => t('event1_place')),
                text: computed(() => t('event1_text'))
            }
        ]);

        return {
            events
        };
    }
};
</script>

<template>

    <!-- Timeline -->
    <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

        <!-- Timeline element -->
        <div v-for="(event, index) in events":key="index" class="relative flex min-w-[350px] items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!--

            This one is the old default static one, it works 
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
            </div>


            This is mortarboard-fill.svg w, it doesn't works but should aaaah it worked seconds ago
            [ ] TODO Use :src="event.icon" in an img tag, but in a way that the img is at the same place than this one (not).
            -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-[calc(50%+1rem)] md:group-even:translate-x-[calc(50%+1rem)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                </svg>
            </div>

            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div class="flex items-center justify-between space-x-2 mb-1">
                    <div class="font-bold text-slate-900">{{ event.title }}</div>
                    <time class="font-caveat font-medium text-indigo-500">{{ event.date }}</time>
                </div>
                <div v-if="event.place != ''" class="flex items-center justify-left space-x-2 mb-1">
                    <img src="/assets/geo-alt-fill.svg">
                    <time class="font-caveat font-medium text-gray-500">{{ event.place }}</time>
                </div>
                <div class="text-slate-500">{{ event.text }}</div>
            </div>

        </div>
        
    </div>

</template>