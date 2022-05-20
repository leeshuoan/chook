FROM python:3-slim
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN python -m pip install --no-cache-dir -r requirements.txt
COPY ./appointment_management.py ./amqp_setup.py ./invokes.py ./
CMD [ "python", "./appointment_management.py" ]
