import pytest
from backend.app.log_parser import LogParser

def test_log_parser():
    log_data = '{"timestamp": "2023-05-01T10:00:00", "log_level": "INFO", "message": "Test log"}'
    parser = LogParser(log_data)
    parsed_data = parser
