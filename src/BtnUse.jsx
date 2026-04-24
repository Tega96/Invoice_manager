// src/App.jsx
import Button from './components/ui/Button'
import { useState } from 'react'
import Logo from './components/ui/Logo'

function BtnUse() {
  const [isLoading, setIsLoading] = useState(false)
  
  // Different click handlers
  const handleSave = () => {
    console.log('Saving data...')
    alert('Saved!')
  }
  
  const handleDelete = () => {
    if (confirm('Are you sure?')) {
      console.log('Deleted!')
    }
  }
  
  const handleAsyncOperation = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    alert('Operation complete!')
  }
  
  return (
    <div className="p-8 space-y-8">
      
      {/* === EXAMPLE 1: Different Variants === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Variants</h3>
        <Button variant="primary" onClick={handleSave}>
          Primary
        </Button>
        <Button variant="secondary" onClick={handleSave}>
          Secondary
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="success" onClick={handleSave}>
          Success
        </Button>
        <Button variant="outline" onClick={handleSave}>
          Outline
        </Button>
        <Button variant="ghost" onClick={handleSave}>
          Ghost
        </Button>
      </div>
      
      {/* === EXAMPLE 2: Custom Colors (Any Color!) === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Custom Colors</h3>
        <Button 
          bgColor="#FF6B35" 
          hoverColor="#E55A2B"
          onClick={() => alert('Orange clicked!')}
        >
          Orange Button
        </Button>
        
        <Button 
          bgColor="#9B59B6" 
          hoverColor="#8E44AD"
          onClick={() => alert('Purple clicked!')}
        >
          Purple Button
        </Button>
        
        <Button 
          bgColor="#1ABC9C" 
          hoverColor="#16A085"
          onClick={() => alert('Teal clicked!')}
        >
          Teal Button
        </Button>
        
        <Button 
          bgColor="#E74C3C" 
          hoverColor="#C0392B"
          textColor="#FFF"
          onClick={() => alert('Custom red!')}
        >
          Custom Red
        </Button>
      </div>
      
      {/* === EXAMPLE 3: Different Sizes === */}
      <div className="space-x-4 items-center">
        <h3 className="text-lg font-semibold mb-2">Sizes</h3>
        <Button size="sm" onClick={handleSave}>
          Small
        </Button>
        <Button size="md" onClick={handleSave}>
          Medium
        </Button>
        <Button size="lg" onClick={handleSave}>
          Large
        </Button>
        <Button size="xl" onClick={handleSave}>
          Extra Large
        </Button>
      </div>
      
      {/* === EXAMPLE 4: With Icons === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">With Icons</h3>
        <Button 
          iconLeft={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          }
          onClick={handleSave}
        >
          Upload
        </Button>
        
        <Button 
          iconRight={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          }
          onClick={handleSave}
        >
          Next
        </Button>
      </div>
      
      {/* === EXAMPLE 5: Different Functionality === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Different Functionality</h3>
        
        {/* Alert on click */}
        <Button onClick={() => alert('Hello World!')}>
          Alert
        </Button>
        
        {/* Console log */}
        <Button onClick={() => console.log('Button clicked at:', new Date())}>
          Console Log
        </Button>
        
        {/* State change */}
        <Button onClick={() => setIsLoading(!isLoading)}>
          Toggle Loading State
        </Button>
        
        {/* Async operation */}
        <Button loading={isLoading} onClick={handleAsyncOperation}>
          Async Operation
        </Button>
      </div>
      
      {/* === EXAMPLE 6: Disabled States === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Disabled States</h3>
        <Button disabled onClick={handleSave}>
          Disabled Button
        </Button>
        
        <Button disabled loading onClick={handleSave}>
          Disabled & Loading
        </Button>
      </div>
      
      {/* === EXAMPLE 7: Full Width Button === */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Full Width</h3>
        <Button fullWidth onClick={handleSave}>
          Full Width Button
        </Button>
      </div>
      
      {/* === EXAMPLE 8: Link Button (acts like an anchor tag) === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Link Button</h3>
        <Button as="a" href="https://google.com" target="_blank" variant="outline">
          Open Google
        </Button>
      </div>
      
      {/* === EXAMPLE 9: Different Rounded Corners === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Rounded Corners</h3>
        <Button rounded="none" onClick={handleSave}>
          Square
        </Button>
        <Button rounded="md" onClick={handleSave}>
          Medium
        </Button>
        <Button rounded="lg" onClick={handleSave}>
          Large
        </Button>
        <Button rounded="full" onClick={handleSave}>
          Pill
        </Button>
      </div>
      
      {/* === EXAMPLE 10: Dynamic Text Change === */}
      <div className="space-x-4">
        <h3 className="text-lg font-semibold mb-2">Dynamic Text</h3>
        <Button 
          onClick={() => {
            const newText = prompt('Enter new button text:', 'Click Me!')
            // In real usage, you'd use state to update the button text
            alert(`Text would change to: ${newText}`)
          }}
        >
          Click to Change Text
        </Button>

        <Logo color='dark'/>
      </div>
      
    </div>
  )
}

export default BtnUse