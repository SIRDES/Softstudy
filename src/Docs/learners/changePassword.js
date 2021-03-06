module.exports = {
  patch: {
    summary: "Learners can update their password",
    tags: ["Learners"],
    security:[{
      "learnerAuth":[]
    }],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              currentPassword: {
                type: "string",
              },
              newPassword: {
                type: "string",
              },
            },
            example: {
              currentPassword: "pass1254",
              newPassword: "newpass1254",
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Password changed successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                },
                message: {
                  type: "string",
                },
              },
              example: {
                status: "success",
                message: "Password changed successfully",
              },
            },
          },
        },
      },
      401: {
        $ref: "#/components/responses/UnauthorizedError"
      }
    },
  },
};