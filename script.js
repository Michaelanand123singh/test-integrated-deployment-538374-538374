// Test JavaScript
console.log('🚀 Test deployment loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM loaded - deployment test successful');
    
    // Add some interactivity
    const successDiv = document.querySelector('.bg-green-100');
    if (successDiv) {
        successDiv.classList.add('test-success');
    }
});