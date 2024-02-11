<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <VueDraggableNext :list="list" v-bind="dragOptions" @start="isDragging = true" @end="isDragging = false">
                    <transition-group type="transition" name="flip-list">
                        <v-card height="100" width="100" color="blue" class="list-group-item mb-3" v-for="element in list" :key="element.order">
                            <i :class=" element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                            {{ element.name }}
                        </v-card>
                    </transition-group>
                </VueDraggableNext>
            </v-col>
            <v-col cols="2">
                <VueDraggableNext :list="list2" v-bind="dragOptions" @start="isDragging = true" @end="isDragging = false">
                    <transition-group type="transition" name="flip-list">
                        <v-card height="100" width="100" color="blue" class="list-group-item mb-3" v-for="element in list2" :key="element.order">
                            <i :class=" element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                            {{ element.name }}
                        </v-card>
                    </transition-group>
                </VueDraggableNext>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
    import { VueDraggableNext } from 'vue-draggable-next'
    import { ref, computed } from 'vue'
    
    const message = [
        'vue.js 3.0',
        'vue.draggable',
        'draggable',
        'component',
        'for',
        'based',
        'on',
        'Sortablejs',
    ]
    const message2 = [
        'king henry',
        'hamza',
        'mew',
        'sung',
        'bye bye',
        'what is bruh',
        'on god',
        'hahaa',
    ]
  
    const list = ref(message.map((name, index) => {
          return { name, order: index + 1 }
    }))
    const list2 = ref(message2.map((name, index) => {
          return { name, order: index + 1 }
    }))

    const dragOptions = computed(() => ({
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
    }))

  </script>
  
  <style>
  .button {
    margin-top: 35px;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
  }
  .list-group-item i {
    cursor: pointer;
  }
  
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  </style>