// NOTE: function to display content
function displayContent(content){
    result.value+=content
}

// NOTE: Clear input
function calClear(){
    result.value=""
}

// NOTE: Result
function calOutput(){
    result.value=eval(result.value)
    
}

// NOTE: Backspace
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}






{/* <script>
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
</script> */}