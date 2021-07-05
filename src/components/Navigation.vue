<template>
    <v-sheet rounded="lg" min-height="40vh">
      <keep-alive>
        <v-list color="transparent" dense nav>
            <template v-for="(item, index) in menus">
                <v-list-item 
                  :key="index" 
                  :to="item.path"
                  color="pink accent-2" 
                  v-bind="$attrs"
                  v-on="$listeners">
                    <v-list-item-icon v-if="item.icon">
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.name }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </keep-alive>
    </v-sheet>
</template>
<script>
export default {
    name: 'MenuList',
    data() {
        return {
            menus: [
                {name: 'menu0', path: '/', icon: 'mdi-folder'},
                {name: 'menu1', path: '/about', icon: 'mdi-folder'},
                {name: 'menu2', path: '/swap', icon: 'mdi-folder'},
                {name: 'menu3', path: '/mint', icon: 'mdi-folder'},
            ],
        };
    },
};
</script>
