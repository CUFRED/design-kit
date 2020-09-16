#! /bin/bash
# deploy.sh

# Get first 7 characters of commit hash
SHA1=${CIRCLE_SHA1:0:7}

# Check branch and deploy to correct target
if [ "$CIRCLE_BRANCH" = "master" ]; then

  # Master Builds
  aws s3 cp css/adk.css s3://design-kit.arc.ht/css/adk.css
  aws s3 cp css/ow.css s3://design-kit.arc.ht/css/ow.css
  aws s3 sync js s3://design-kit.arc.ht/js/ --delete
  aws s3 sync fonts s3://design-kit.arc.ht/fonts/ --delete
  aws s3 sync assets s3://design-kit.arc.ht/assets/ --delete
  aws s3 sync docs s3://design-kit.arc.ht/docs/ --delete
  aws s3 sync templates s3://design-kit.arc.ht/templates/ --delete
  aws s3 sync . s3://design-kit.arc.ht/ --exclude "*" --include "*.html"

else

  # Development Builds
  cp css/adk.css css/$SHA1.css
  aws s3 cp css/$SHA1.css s3://design-kit.arc.ht/css/dev/$SHA1.css

fi
