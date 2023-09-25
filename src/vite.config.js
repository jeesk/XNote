// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue({
        template: {
            compilerOptions: {
                // i am ignorning my custom '<container>' tag
                isCustomElement: (tag) => ['ion'].includes(tag)
            }
        }
    })]
}