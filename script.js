<script>
    function addAuthorAuthority() {
        const footer = document.getElementById('footer');
        const authorityNotice = document.createElement('p');
        authorityNotice.textContent = '© 2024 by David Xu. All rights reserved.';
        footer.appendChild(authorityNotice);
    }

    // Call the function on page load
    window.onload = addAuthorAuthority;
</script>
