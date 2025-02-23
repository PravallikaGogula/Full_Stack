import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Todo from './components/Todo'
import GitRepo from './components/GitRepo'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./index.css";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <Navigation />
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/gitrepo" element={<GitRepo />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
