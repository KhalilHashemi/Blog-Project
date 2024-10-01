import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../graphql/queries";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import CommentForm from "../components/comment/CommentForm";
import Comments from "../components/comment/Comments";
import ScrollButton from "../shared/ScrollButton";
import { useEffect } from "react";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);

  const {
    data: postData,
    loading: postLoading,
    error: postError,
  } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  const authorHandler = () => {
    navigate(`/authors/${postData.post.author.slug}`);
  };
  if (postLoading) return <Loader />;
  if (postError) return <h3>Error</h3>;
  const { author, content, coverPhoto, title } = postData.post;

  return (
    <Container maxWidth="lg" sx={{ padding: "24px" }}>
      <ScrollButton />
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={7}
          display="flex"
          alignItems="center"
          maxWidth="fit-content!important"
          sx={{ cursor: "pointer" }}
          onClick={authorHandler}
        >
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
