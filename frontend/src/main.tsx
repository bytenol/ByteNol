import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import router from './routes/AppRouter.tsx'
import { ModalProvider } from './providers/ModalProvider.tsx'
import { SnackbarProvider } from './providers/SnackbarProvider.tsx'
import { SessionProvider } from './providers/SessionProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ModalProvider>
			<SnackbarProvider>
				<SessionProvider>
					<RouterProvider router={router} />
				</SessionProvider>
			</SnackbarProvider>
		</ModalProvider>
	</StrictMode>,
)
