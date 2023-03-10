export const data = [
    {
        data:
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ ...styles.paragraph, color: '#00b4d8' }}>
                    RGBA (Red Green Blue Alpha)
                </Text>
                <Text style={styles.paragraph}>
                    RGBA stands for Red Green Blue Alpha, which is a color model used in digital design and programming to
                    specify colors with an added alpha channel for transparency. Like the RGB model, RGBA uses a combination
                    of letters and numbers to represent specific colors, but with the added alpha channel, RGBA codes consist
                    of four values instead of three. The alpha channel represents the level of transparency, with 0 being
                    fully transparent and 1 being fully opaque.
                </Text>
                <Text style={styles.paragraph}>
                    For example, the RGBA code for red with 50% transparency would be "rgba(255,0,0,0.5)". In this case, the
                    red value is 255 (fully intense), the green and blue values are 0 (no intensity), and the alpha value is 0.5 (50% transparency).
                </Text>
                <Text style={styles.paragraph}>
                    One key difference between RGBA and RGB is the inclusion of the alpha channel in RGBA, which allows for the specification of
                    transparent colors. This can be useful for creating layered or blended effects in digital design. RGB, on the other hand, does
                    not have an alpha channel and is limited to solid, opaque colors.
                </Text>
                {/* <View style={{borderBottomColor: 'white', borderBottomWidth: 4, marginTop: '1rem', marginBottom: '1rem'}}></View> */}
            </View>
    },
    {
        data:
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ ...styles.paragraph, color: '#00b4d8' }}>
                    Hexidecimal
                </Text>
                <Text style={styles.paragraph}>
                    Hex color codes are a widely used method in digital design and programming to specify colors
                    for web pages, graphics, and user interfaces. These codes consist of a six-digit combination of
                    letters and numbers that represent a specific color using the RGB (red, green, blue) color model.
                    Each color is represented by a two-digit hexadecimal number, with 00 being the lowest intensity
                    and FF being the highest intensity. For example, the hex color code for red is "#FF0000", green
                    is "#00FF00", and blue is "#0000FF". In addition to these primary colors, hex color codes can be
                    combined to create a wide range of colors, such as "#FFFFFF" for white, "#000000" for black, and
                    "#9ACD32" for yellow.
                </Text>
            </View>
    },
    {
        data:
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ ...styles.paragraph, color: '#00b4d8' }}>
                    Complementary Colors
                </Text>
                <Text style={styles.paragraph}>
                    Certain colors and hues can work well together and appear to be complementary
                    because of the way that the colors are arranged on the color wheel. The color
                    wheel is a visual representation of the colors of the visible spectrum arranged in a circle.
                </Text>
                <Text style={styles.paragraph}>
                    There are a few different ways that colors can be arranged on the color wheel, but one common
                    way is to arrange the primary colors (red, yellow, and blue) around the wheel, with the secondary
                    colors (orange, green, and purple) between the primary colors. The tertiary colors
                    (yellow-green, blue-green, blue-purple, red-purple, red-orange, and yellow-orange) are
                    located between the primary and secondary colors on the wheel.
                </Text>
                <Text style={styles.paragraph}>
                    Colors that are located opposite each other on the color wheel are known as complementary colors.
                    These colors tend to work well together because they are highly contrasting, which can create a
                    visually appealing balance. For example, red and green are complementary colors, as are blue and orange.
                </Text>
                <Text style={styles.paragraph}>
                    There are several theories about why certain color combinations are pleasing to the eye, and some of
                    these theories involve mathematical principles such as the golden ratio. However, the exact reasons
                    for why certain color combinations are perceived as being harmonious or complementary are still not
                    fully understood and are the subject of ongoing research in fields such as psychology and neuroscience.
                </Text>
            </View>
    }

]; // example data array