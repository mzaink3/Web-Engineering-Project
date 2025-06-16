const Hero = () => {
    return (
        <div id="hero">
            <div className="left_side">
                <p style={{
    fontSize: '1.8em',
    textAlign: 'center',
    marginTop: '135px',
    fontWeight: '600',
    color: '#888F9F',
    letterSpacing: '3px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
}}>
    A Bakery Management System!
</p>

                <p>Welcome to</p>
                <h1>Divine Delight</h1>
                <a href="#order" className="button">Order now</a>
            </div>
            <img src="/images/bread.jpg" alt="Bread" loading="lazy" />
        </div>
    )
}

export default Hero 