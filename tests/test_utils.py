from backend.app.utils import convert_to_json

def test_convert_to_json():
    data = '{"key": "value"}'
    result = convert_to_json(data)
    assert result == {"key": "value"}

def test_invalid_json():
    data = '{"key": "value"'
    result = convert_to_json(data)
    assert result is None
