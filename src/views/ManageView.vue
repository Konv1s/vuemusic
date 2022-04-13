<template>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div class="col-span-1">
                <UploadComponent/> <!--ref="upload"-->
            </div>
            <div class="col-span-2">
                <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                        <span class="card-title">My Songs</span>
                        <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
                    </div>
                    <div class="p-6">
                        <!-- Composition Items -->
                        <CompositionItem v-for="song in songs" :key="song.docId" :song="song"/>
                        <!--<div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import store from '@/store';
  import UploadComponent from '@/components/UploadComponent';
  import { songsCollection, auth } from '@/includes/firebase';
  import CompositionItem from '@/components/CompositionItem';

  export default {
    name: 'ManageView',
    components: { CompositionItem, UploadComponent },
    data() {
      return {
        songs: [],
      };
    },
    async created() {
      const snapshot = await songsCollection
        .where('uid', '==', auth.currentUser.uid)
        .get();

      snapshot.forEach(document => {
        const song = {
          ...document.data(),
          docID: document.id,
        };

        this.songs.push(song);
      });
    }
    /* beforeRouteLeave(to, from, next){
       this.$refs.upload.cancelUploads();
       next();
     }*/
  };
</script>

<style scoped>

</style>
