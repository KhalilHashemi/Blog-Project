import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import ScrollButton from "../shared/ScrollButton";
import { useEffect } from "react";

function AuthorPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h3>Error...</h3>;
  const { avatar, description, name, field, posts } = data.author;
  return (
    <Container maxWidth="lg">
      <ScrollButton />
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "left", paddingLeft: "24px" }}
        >
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color="text.secondary"
            mt={2}
            mb={4}
          >
            {field}
          </Typography>
        </Grid>
        <Grid item>
          <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default AuthorPage;
