// Hide sidebar on index page only with responsive spacing
document.addEventListener('DOMContentLoaded', function() {
    
    function getResponsiveMargins() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
            return { margin: '0.5rem', maxWidth: 'calc(100% - 1rem)' };
        } else if (screenWidth <= 768) {
            return { margin: '1rem', maxWidth: 'calc(100% - 2rem)' };
        } else {
            return { margin: '2rem', maxWidth: 'calc(100% - 4rem)' };
        }
    }
    
    function applyIndexPageStyling() {
        const currentPath = window.location.pathname;
        const isIndexPage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
        
        if (isIndexPage) {
            const margins = getResponsiveMargins();
            
            // Hide the primary sidebar (left navigation)
            const primarySidebar = document.querySelector('.md-sidebar--primary');
            if (primarySidebar) {
                primarySidebar.style.display = 'none';
            }
            
            // Adjust main content layout with responsive spacing
            const mainInner = document.querySelector('.md-main__inner');
            if (mainInner) {
                mainInner.style.marginLeft = margins.margin;
            }
            
            const content = document.querySelector('.md-content');
            if (content) {
                content.style.maxWidth = margins.maxWidth;
                content.style.marginLeft = margins.margin;
                content.style.marginRight = margins.margin;
            }
        }
    }
    
    // Apply styling on load
    applyIndexPageStyling();
    
    // Reapply on window resize
    window.addEventListener('resize', applyIndexPageStyling);
});

// Also handle navigation events (for single-page app behavior)
document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const currentPath = window.location.pathname;
                const isIndexPage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
                
                const primarySidebar = document.querySelector('.md-sidebar--primary');
                const mainInner = document.querySelector('.md-main__inner');
                const content = document.querySelector('.md-content');
                
                if (primarySidebar) {
                    if (isIndexPage) {
                        const screenWidth = window.innerWidth;
                        let margin, maxWidth;
                        
                        if (screenWidth <= 480) {
                            margin = '0.5rem';
                            maxWidth = 'calc(100% - 1rem)';
                        } else if (screenWidth <= 768) {
                            margin = '1rem';
                            maxWidth = 'calc(100% - 2rem)';
                        } else {
                            margin = '2rem';
                            maxWidth = 'calc(100% - 4rem)';
                        }
                        
                        primarySidebar.style.display = 'none';
                        if (mainInner) mainInner.style.marginLeft = margin;
                        if (content) {
                            content.style.maxWidth = maxWidth;
                            content.style.marginLeft = margin;
                            content.style.marginRight = margin;
                        }
                    } else {
                        primarySidebar.style.display = 'block';
                        // Reset to default spacing for other pages
                        if (mainInner) mainInner.style.marginLeft = '';
                        if (content) {
                            content.style.maxWidth = '';
                            content.style.marginLeft = '';
                            content.style.marginRight = '';
                        }
                    }
                }
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});