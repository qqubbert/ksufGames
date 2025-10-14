import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: { alias: {
        "@app": "/src/app",
        "@shared": "/src/shared",
        "@widgets": "/src/widgets",
        "@entities": "/src/entities",
        "@features": "/src/features",
        "@pages": "/src/pages",
        "@assets": "/src/shared/assets",
        "@images": "/src/shared/assets/images",
        "@icons": "/src/shared/assets/icons",
        "@fonts": "/src/shared/assets/fonts",
        "@styles": "/src/shared/config/Styles",
        "@config": "/src/shared/config"
    },
  },
})
