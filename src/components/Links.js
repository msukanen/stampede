/**
 * Generate PayPal donation link form.
 * @returns PayPal donation link form.
 */
export const PayPalLinkForm = () => {
    return (
    <form action="https://www.paypal.com/donate" method="post" target="msukanen-paypal">
        <input type="hidden" name="business" value="3BJYTPADUM66A" />
        <input type="hidden" name="no_recurring" value="0" />
        <input type="hidden" name="currency_code" value="EUR" />
        <input type="image"
               src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
               border="0"
               name="submit"
               title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    </form>)
}

/**
 * Generate link to project page.
 * @param {*} props project = "blabla"
 * @returns 
 */
export const GitHubLogo = (props) => {
    return <a href={`https://github.com/msukanen/${props.project}`} target="msukanen-github">
             <img src="https://scifi.linkpc.net/msukanen/gfx/github.svg"
                  alt="Source code @github"
                  style={{height: 'calc(10px + 2vmin)'}} />
           </a>
}
