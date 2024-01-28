<script setup>

    import draggable from 'vuedraggable'
    import { ref } from 'vue';

    const message = ref([
        {name: "joren", order: 1},
        {name: "joren1", order: 2},
        {name: "joren2", order: 3},
        {name: "joren3", order: 4},
    ])
    const drag = ref(false)

    // const list = ref(message.map((name, index) => {
    //     return {name, order: index + 1}
    // }))

    // function sort() {
    //     list.value = list.value.sort((a, b) => a.order - b.order);
    // }

    const  dragOptions = () => {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }

</script>

<template>
    <v-row>
        <draggable 
        v-model="message" 
        class="list-group"
        group="people" 
        @start="drag=true" 
        @end="drag=false"
        v-bind="dragOptions"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }" 
        item-key="order">
            <template #item="{element}">
                <v-col cols="3" class="list-group-item">
                    <v-card height="50px" width="50px" color="blue"
                    :class="[
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              , 'max-4']"
              @click="element.fixed = !element.fixed"
                    >{{element.name}}</v-card>
                </v-col>
            </template>
        </draggable>
    </v-row>
</template>

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
</style>