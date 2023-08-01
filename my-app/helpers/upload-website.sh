#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)

BUILD_DIR=$REPO_ROOT/my-app/build/

cd $BUILD_DIR

aws --profile cloud s3 cp --recursive . s3://sungano.co/

cd $REPO_ROOT