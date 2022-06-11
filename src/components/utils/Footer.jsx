import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <DivFooter className='sticky-bottom' >
        <footer class="footer  py-3">
            <div class="container text-center">
                <span class="text-muted text-center">By SanFosX.</span>
            </div>
        </footer>
        </DivFooter>
    )
}

export default Footer

const DivFooter = styled.div`
    background-color:black;
   

`