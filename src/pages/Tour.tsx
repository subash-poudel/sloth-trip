import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import Faq from "../components/Faq";
import { BottomNav } from "../components/BottomNav";

export const Tour = () => {
  return (
    <>
      <Container sx={{ width: 900 }}>
        <Typography variant={"h3"} component={"h1"} marginTop={3}>
          Welcome to Niagra Falls
        </Typography>
        <p>This is a tour</p>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg"
            alt=""
            height={325}
          />
          <ImageCollage />
        </Box>
        <Box>
          <Typography
            variant={"h6"}
            component={"h4"}
            marginTop={3}
            marginBottom={2}
          >
            About this ticket
          </Typography>
          <Typography variant={"body2"} component={"p"} marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, tempora, maxime iusto illum labore fuga vel laudantium
            fugit quo accusamus explicabo deleniti! Quod doloremque minus
            repudiandae rem corrupti, doloribus exercitationem!
          </Typography>
        </Box>
        <Box sx={{ marginBottom: 8 }}>
          <Typography variant={"h6"} component={"h4"} marginTop={3}>
            Frequently asked questions
          </Typography>
          <Faq />
        </Box>
        <BottomNav />
      </Container>
    </>
  );
};
