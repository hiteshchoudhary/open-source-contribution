# Use an official Python runtime as a parent image, specifically version 3.8 based on the lightweight Alpine Linux (version 3.10)
FROM python:3.8-alpine3.10

# Copy the current directory (.) in the host to /app in the container.
# This copies your application, including all files and subdirectories, into the container.
COPY . /app

# Set the working directory inside the container to /app.
# This is the directory from which the container commands will be run.
WORKDIR /app

# Run the command to install the required Python dependencies.
# It assumes that there is a requirements.txt file in the /app directory that lists these dependencies.
RUN pip install -r requirements.txt

# Inform Docker that the container listens on the specified network port at runtime.
# In this case, it's port 5000. This does not actually publish the port.
# Example 5000 is Flask default port. 3501 is Streamlit default port If you are running streamlit change Expose to 3501
EXPOSE 5000

# Define the command to run the application.
# It runs the Python interpreter on app.py, which should be located in /app.
CMD ["python", "./app.py"]
